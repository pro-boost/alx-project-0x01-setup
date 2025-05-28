import { ButtonProps } from "@/interfaces/index";

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
