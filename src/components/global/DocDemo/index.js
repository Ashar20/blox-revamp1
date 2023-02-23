import React, { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

import './demo.css';

const DocDemo = (props) => {
  const [ionicMode, setIonicMode] = useState('ios');

  const iframe = useRef(null);
  const iframeLoaded = useRef(false);
  const messageQueue = useRef([]);
  const newestMessage = useRef(null);

  useEffect(() => {
    window.addEventListener('demoMessage', handleMessage);

    () => window.removeEventListener('demoMessage', handleMessage);
  }, []);

  const handleMessage = useCallback(async (msg) => {
    iframeLoaded.current ? postMessage(msg) : messageQueue.current.push(msg);
  }, []);

  const postMessage = (msg) => {
    newestMessage.current = msg;
    try {
      if (iframe.current && iframe.current.contentWindow) {
        iframe.current.contentWindow.postMessage(msg.detail, '*');
      }
    } catch (e) {
      // ignore
    }
  };

  const onIframeLoad = () => {
    messageQueue.current.forEach((msg) => postMessage(msg));
    postMessage(newestMessage.current);
    messageQueue.current = [];
    iframeLoaded.current = true;
  };



 

  const device = (
    <div className={`docs-demo-device ${ionicMode}`}>
     
       
          
       
      <div style={{ color: '#4d8dff', lineHeight : 10, padding: 10 }}>
         <DocsCard  header="Support Policy" href="https://getblox.ai/privacy-policy/" icon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon.svg" hoverIcon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon-hover.svg">
         
       </DocsCard></div>
       <div style={{ color: '#4d8dff', lineHeight : 10, padding: 10 }}>
       <DocsCard header="Inspiration center" href="https://getblox.ai/resources/"  icon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon.svg" hoverIcon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon.svg" >
        
       </DocsCard></div>
       <div style={{ color: '#4d8dff', lineHeight : 10, padding: 10 }}>
       <DocsCard header="About Blox" href="api/alert"  icon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon.svg"  hoverIcon="https://d1r1e7xjkfj7nz.cloudfront.net/guide-components-icon-hover.svg">
        
       </DocsCard></div>
          
        
      
    </div>
    
  );

  return (
    <div className="doc-demo">
      
      {device}
     
    </div>
  );
};

const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};

function userCardComponent(){

         <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}>D</span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Desmond Nyamador</p>
          <p>I just learned an easy way to style React Components</p>
        </div>
      </div>

}

export default DocDemo;