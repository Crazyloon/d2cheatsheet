const FloatingActionButton = () => {
  return (
    <div onClick={scrollToTop} className="floating-button">
      <i className="chevron"></i>
    </div>
  );
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default FloatingActionButton;