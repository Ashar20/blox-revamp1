import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';

export default function NavbarCta({ text, href, ...props }) {
  return (
    <a onClick={()=>{
      

    }}{...props} href={useBaseUrl(href)} className={clsx(props.className, 'cta')}>
      {text}
            
<script type='text/javascript' src='https://ind-widget.freshworks.com/widgets/81000001525.js' async defer></script>
    </a>
  );
}
