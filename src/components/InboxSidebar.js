
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/InboxSidebar.css';

const InboxSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="simple-sidebar">
      <Button
        sx={{
          cursor: 'pointer',
          color: 'black'
        }}
        onClick={() => navigate('/admin/inbox/archive-emails')}
      >
        Archive Emails
      </Button>
    </div>
  );
};

export default InboxSidebar;