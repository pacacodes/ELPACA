import React from 'react';

function ProjectHeader({ projectName, projectAddress, sectionTitle, layoutSubtitle }) {
  return (
    <div style={{
      position: 'fixed',
      top: '1.2rem',
      left: 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: '#888',
      fontSize: '1.08rem',
      letterSpacing: '0.04em',
      zIndex: 9999,
      background: 'transparent',
      padding: '0.56rem 0.96rem',
      borderRadius: '10px',
      boxShadow: 'none',
      maxWidth: '900px',
      minWidth: '700px',
      margin: '0 auto',
      left: 0,
      marginLeft: '-4rem',
      transform: 'none',
    }}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'stretch',width:'100%',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-end',textAlign:'right',minWidth:'320px',maxWidth:'420px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
          <span style={{color:'#888',fontSize:'1.08rem',fontWeight:'bold'}}>{projectName}</span>
          <span style={{fontSize:'0.84rem',color:'#888',marginTop:'0.16rem',fontWeight:'400'}}>{projectAddress}</span>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'80px',minWidth:'60px'}}>
          <span style={{
            display:'inline-block',
            height:'3.6rem',
            minHeight:'100%',
            borderLeft:'1.5px solid #bbb',
            marginRight:'1.1rem',
            marginLeft:'1.1rem',
            alignSelf:'stretch',
          }}></span>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',minWidth:'220px',maxWidth:'320px'}}>
          <span style={{color:'#888',fontSize:'1.08rem',fontWeight:'bold'}}>{sectionTitle}</span>
          {layoutSubtitle && (
            <span style={{fontSize:'0.84rem',color:'#888',marginTop:'0.16rem',fontWeight:'400'}}>{layoutSubtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
