import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { Http2ServerRequest } from 'http2';
import { BlockList } from 'net';
import React from 'react';

import styles from './index.module.scss';

export default function NativeEnterpriseCard(props) {
  return (
    <a className={clsx(props.className, styles.nativeEnterprise)} href="https://support.getblox.ai/wp-content/uploads/2022/11/Blox-demo-video-9.mp4">
      <div className="image-wrapper">
        <img src={useBaseUrl('/img/native/discovery.svg')} width="170" height="128" />
        
      </div>
       <div style={{ paddingLeft:60, marginLeft:-70}} >
       <img src={useBaseUrl('/img/native/play.svg')} style={{  }} margin-right="10"width="50" height="50" />
        
       
       </div>
       <div>
       <p>
        A video highlighting the features & functionality offered by Blox 
        </p>
        </div>
      
    </a>
  );
}
