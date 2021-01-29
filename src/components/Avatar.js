import React from "react";

const styles = {
  avatarStyle: {
    width: "50px",
    borderRadius: "50%",
  },
};

const Avatar = () => {
  return (
    <>
      <img
        style={styles.avatarStyle}
        src="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
        alt="avatar"
      />
    </>
  );
};

export default Avatar;
