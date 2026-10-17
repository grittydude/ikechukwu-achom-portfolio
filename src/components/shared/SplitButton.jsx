import SmartLink from "./SmartLink";
import { IconArrowRight } from "../ui/Icons";

/** Orange label + black arrow disc ("View All Services →" in the reference). */
export default function SplitButton({ to, children, icon: Icon = IconArrowRight, className = "", ...rest }) {
  return (
    <SmartLink to={to} className={`btn-split ${className}`} {...rest}>
      <span className="btn-split__label">{children}</span>
      <span className="btn-split__icon">
        <Icon size={18} />
      </span>
    </SmartLink>
  );
}
