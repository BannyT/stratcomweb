import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  db, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy,
  auth,
  signOut
} from './firebase';
import './Dashboard.css';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({ title: '', subtitle: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Get current user from Firebase Auth
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        navigate('/login');
      }
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  // 🔥 Real‑time listener for activities
  useEffect(() => {
    const q = query(collection(db, 'activities'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(fetched);
    });

    return () => unsubscribe();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({ title: '', subtitle: '', description: '' });
    setEditingId(null);
  };

  // ➕ Add or ✏️ Update activity
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Title and description are required.');
      return;
    }

    setLoading(true);
    try {
      if (editingId) {
        await updateDoc(doc(db, 'activities', editingId), {
          title: formData.title,
          subtitle: formData.subtitle || '',
          description: formData.description,
          updatedAt: new Date().toISOString(),
        });
        alert('Activity updated!');
      } else {
        await addDoc(collection(db, 'activities'), {
          title: formData.title,
          subtitle: formData.subtitle || '',
          description: formData.description,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: user ? user.uid : null, // optional: link to user
        });
        alert('Activity added!');
      }
      resetForm();
    } catch (error) {
      console.error('Error saving activity:', error);
      alert('Failed to save. Check console.');
    } finally {
      setLoading(false);
    }
  };

  // ✏️ Edit
  const handleEdit = (activity) => {
    setFormData({
      title: activity.title,
      subtitle: activity.subtitle || '',
      description: activity.description,
    });
    setEditingId(activity.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🗑️ Delete
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this activity permanently?')) return;
    try {
      await deleteDoc(doc(db, 'activities', id));
      alert('Activity deleted.');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete.');
    }
  };

  // 🚪 Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to log out.');
    }
  };

  if (!user) {
    return <div className="dashboard-loading">Loading...</div>; // or redirect
  }

  return (
    <div className="dashboard">
      {/* Top Bar with Logout */}
      <div className="dashboard-topbar">
        <div className="topbar-left">
          <span className="topbar-logo">StratCom</span>
          <span className="topbar-greeting">Hello, {user.displayName || user.email || 'User'}</span>
        </div>
        <button className="topbar-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <span className="dashboard-badge">Internship Logbook</span>
          <h1>My <span className="highlight">Activities</span></h1>
          <p>Track your daily internship progress</p>
        </div>

        {/* Form Card */}
        <div className="form-card">
          <h3>{editingId ? '✏️ Edit Activity' : '➕ Add New Activity'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g., Daily Stand-up"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                placeholder="e.g., Team Sync"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                placeholder="What did you do or learn?"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Saving...' : editingId ? 'Update Activity' : 'Add Activity'}
              </button>
              {editingId && (
                <button type="button" className="btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Activities List */}
        <div className="activities-section">
          <h3>Your Logbook ({activities.length})</h3>
          {activities.length === 0 ? (
            <div className="empty-state">No activities yet. Start logging!</div>
          ) : (
            <div className="activities-grid">
              {activities.map((act) => (
                <div key={act.id} className="activity-card">
                  <div className="activity-content">
                    <h4>{act.title}</h4>
                    {act.subtitle && <span className="act-subtitle">{act.subtitle}</span>}
                    <p className="act-description">{act.description}</p>
                    <small className="act-date">
                      {act.createdAt ? new Date(act.createdAt).toLocaleDateString() : ''}
                    </small>
                  </div>
                  <div className="activity-actions">
                    <button className="btn-edit" onClick={() => handleEdit(act)}>
                      ✏️
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(act.id)}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;