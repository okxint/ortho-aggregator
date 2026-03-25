export default function ImplantIcon({ categoryId, className = "w-20 h-20" }: { categoryId: string; className?: string }) {
  const stroke = "currentColor";
  const sw = 1.2;

  switch (categoryId) {
    // Bone plate — flat plate with screw holes
    case "bone-plates":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="15" y="25" width="50" height="12" rx="3" />
          <circle cx="25" cy="31" r="3" />
          <circle cx="40" cy="31" r="3" />
          <circle cx="55" cy="31" r="3" />
          <line x1="25" y1="37" x2="25" y2="50" />
          <line x1="40" y1="37" x2="40" y2="52" />
          <line x1="55" y1="37" x2="55" y2="50" />
          <path d="M10 58 Q40 65 70 58" strokeDasharray="3 2" opacity="0.4" />
        </svg>
      );

    // Bone screw — threaded screw
    case "bone-screws":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="40" cy="18" r="8" />
          <line x1="35" y1="18" x2="45" y2="18" />
          <rect x="37" y="26" width="6" height="8" rx="1" />
          <path d="M37 34 L35 38 L45 38 L43 34" />
          <path d="M35 38 L33 42 L47 42 L45 38" />
          <path d="M33 42 L31 46 L49 46 L47 42" />
          <path d="M31 46 L33 50 L47 50 L49 46" />
          <path d="M33 50 L35 54 L45 54 L47 50" />
          <path d="M35 54 L37 58 L43 58 L45 54" />
          <path d="M37 58 L40 65 L43 58" />
        </svg>
      );

    // IM nail — long rod with cross screws
    case "intramedullary-nails":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="36" y="8" width="8" height="64" rx="4" />
          <line x1="20" y1="20" x2="60" y2="20" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="60" cy="20" r="2" />
          <line x1="22" y1="58" x2="58" y2="58" />
          <circle cx="22" cy="58" r="2" />
          <circle cx="58" cy="58" r="2" />
          <circle cx="40" cy="20" r="2.5" fill={stroke} />
          <circle cx="40" cy="58" r="2.5" fill={stroke} />
        </svg>
      );

    // Wires/pins — K-wire shapes
    case "wires-pins-staples":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <line x1="15" y1="15" x2="65" y2="65" />
          <line x1="25" y1="10" x2="55" y2="70" />
          <path d="M45 12 L45 22 L55 22" />
          <line x1="45" y1="12" x2="45" y2="68" />
          <circle cx="15" cy="15" r="2" fill={stroke} />
          <circle cx="25" cy="10" r="2" fill={stroke} />
        </svg>
      );

    // Hip replacement — femoral stem + head
    case "hip-replacement":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="42" cy="18" r="10" />
          <circle cx="42" cy="18" r="6" strokeDasharray="2 2" />
          <path d="M38 28 L36 38 L34 72" strokeWidth="2" />
          <path d="M46 28 L44 38 L42 72" strokeWidth="2" />
          <path d="M34 72 Q38 75 42 72" />
          <line x1="30" y1="45" x2="48" y2="45" strokeDasharray="3 2" opacity="0.4" />
        </svg>
      );

    // Knee replacement — femoral + tibial component
    case "knee-replacement":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M22 15 Q40 12 58 15 L55 32 Q40 35 25 32 Z" />
          <rect x="28" y="38" width="24" height="6" rx="2" />
          <path d="M25 44 L25 65 Q40 68 55 65 L55 44" />
          <line x1="40" y1="44" x2="40" y2="65" strokeDasharray="2 2" opacity="0.4" />
          <circle cx="33" cy="24" r="2" fill={stroke} opacity="0.3" />
          <circle cx="47" cy="24" r="2" fill={stroke} opacity="0.3" />
        </svg>
      );

    // Shoulder — humeral head + glenoid
    case "shoulder-upper-limb":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="35" cy="22" r="12" />
          <circle cx="35" cy="22" r="7" strokeDasharray="2 2" />
          <path d="M35 34 L37 50 L39 70" strokeWidth="2" />
          <path d="M35 34 L33 50 L31 70" strokeWidth="2" />
          <path d="M31 70 Q35 73 39 70" />
          <path d="M55 15 L55 35" strokeWidth="3" />
          <path d="M50 15 Q55 12 60 15" />
        </svg>
      );

    // Spine — pedicle screws + rod
    case "spine-implants":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="30" y="10" width="20" height="12" rx="3" />
          <rect x="30" y="28" width="20" height="12" rx="3" />
          <rect x="30" y="46" width="20" height="12" rx="3" />
          <line x1="25" y1="16" x2="25" y2="52" strokeWidth="2" />
          <line x1="55" y1="16" x2="55" y2="52" strokeWidth="2" />
          <line x1="25" y1="16" x2="30" y2="16" />
          <line x1="25" y1="34" x2="30" y2="34" />
          <line x1="25" y1="52" x2="30" y2="52" />
          <line x1="50" y1="16" x2="55" y2="16" />
          <line x1="50" y1="34" x2="55" y2="34" />
          <line x1="50" y1="52" x2="55" y2="52" />
          <rect x="32" y="62" width="16" height="8" rx="4" strokeDasharray="2 2" opacity="0.4" />
        </svg>
      );

    // External fixation — frame with pins
    case "external-fixation":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="10" y="15" width="6" height="50" rx="2" />
          <rect x="64" y="15" width="6" height="50" rx="2" />
          <line x1="16" y1="25" x2="64" y2="25" />
          <line x1="16" y1="40" x2="64" y2="40" />
          <line x1="16" y1="55" x2="64" y2="55" />
          <circle cx="13" cy="25" r="2.5" fill={stroke} />
          <circle cx="67" cy="25" r="2.5" fill={stroke} />
          <circle cx="13" cy="40" r="2.5" fill={stroke} />
          <circle cx="67" cy="40" r="2.5" fill={stroke} />
          <circle cx="13" cy="55" r="2.5" fill={stroke} />
          <circle cx="67" cy="55" r="2.5" fill={stroke} />
          <line x1="30" y1="25" x2="30" y2="55" strokeDasharray="3 2" opacity="0.4" />
          <line x1="50" y1="25" x2="50" y2="55" strokeDasharray="3 2" opacity="0.4" />
        </svg>
      );

    // Specialized — anchor/generic implant
    case "specialized-implants":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="40" cy="20" r="10" />
          <path d="M40 30 L40 50" strokeWidth="2" />
          <path d="M34 50 L40 65 L46 50" />
          <path d="M30 38 L50 38" />
          <circle cx="30" cy="38" r="3" />
          <circle cx="50" cy="38" r="3" />
          <path d="M25 55 Q40 60 55 55" strokeDasharray="3 2" opacity="0.4" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="20" y="20" width="40" height="40" rx="8" />
          <circle cx="40" cy="40" r="10" />
        </svg>
      );
  }
}
