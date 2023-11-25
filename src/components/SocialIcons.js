const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Mk-1000" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Mokni hamdi' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mokni-hamdi-mk712/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Mokni hamdi' LinkedIn Profile" ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
