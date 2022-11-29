function Button({ children, onClick, cursor }) {
  return (
    <button className="btn-box" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
