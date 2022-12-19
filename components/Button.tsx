interface IButton {
  label: string;
  onClick: any;
}

const Button = ({ label, onClick, ...props }: IButton): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary rounded-0 col-2"
    >
      {label}
    </button>
  );
};

export { Button };
