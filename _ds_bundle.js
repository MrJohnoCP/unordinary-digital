/* @ds-bundle: {"format":4,"namespace":"UnordinaryDigitalDesignSystem_709a4c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"543175d392d6","components/core/Button.jsx":"b3f208983d7e","components/core/Card.jsx":"2735337f61ac","components/core/IconButton.jsx":"4d1186c3e1cc","components/core/Tag.jsx":"dba53cb37bc4","components/feedback/Dialog.jsx":"973a15ecccfe","components/feedback/Toast.jsx":"9885ec0fa362","components/feedback/Tooltip.jsx":"6417c65669a7","components/forms/Checkbox.jsx":"1ede0d227de8","components/forms/Input.jsx":"4fb92387b716","components/forms/Radio.jsx":"887cf326a484","components/forms/Select.jsx":"45669ec15fbc","components/forms/Switch.jsx":"68ba36065a7e","components/navigation/Tabs.jsx":"da9cc778de92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnordinaryDigitalDesignSystem_709a4c = window.UnordinaryDigitalDesignSystem_709a4c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--light-grey)',
      color: 'var(--charcoal)'
    },
    accent: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    },
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '12px',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-xs)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    padding: '14px 26px',
    fontSize: 'var(--text-base)'
  }
};
const variantStyles = {
  primary: {
    base: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    },
    hover: {
      background: 'var(--charcoal-hover)'
    }
  },
  accent: {
    base: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    },
    hover: {
      background: 'var(--orange-hover)'
    }
  },
  secondary: {
    base: {
      background: 'var(--white)',
      color: 'var(--charcoal)',
      boxShadow: 'var(--shadow-sm)'
    },
    hover: {
      background: 'var(--light-grey)'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--charcoal)'
    },
    hover: {
      background: 'var(--light-grey)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  onClick,
  style
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...sizeStyles[size],
      ...v.base,
      ...(hover && !disabled ? v.hover : {}),
      ...style
    }
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-6)',
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  'aria-label': ariaLabel
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const bg = variant === 'filled' ? hover ? 'var(--charcoal-hover)' : 'var(--charcoal)' : hover ? 'var(--light-grey)' : 'transparent';
  const color = variant === 'filled' ? 'var(--white)' : 'var(--charcoal)';
  return React.createElement('button', {
    'aria-label': ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: bg,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '13px',
      padding: '6px 8px 6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--charcoal)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      border: 'none',
      background: 'var(--light-grey)',
      borderRadius: '50%',
      width: 18,
      height: 18,
      cursor: 'pointer',
      color: 'var(--charcoal)',
      fontSize: 11,
      lineHeight: 1
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      maxWidth: 440,
      width: '90%',
      fontFamily: 'var(--font-body)'
    }
  }, title && React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--charcoal)',
      marginBottom: 'var(--space-4)'
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--charcoal)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'dark',
  onClose
}) {
  const tones = {
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    },
    accent: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      ...tones[tone]
    }
  }, React.createElement('span', null, message), onClose && React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Dismiss',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 16,
      opacity: 0.7
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--charcoal)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: '6px',
      border: '1px solid ' + (checked ? 'var(--charcoal)' : 'var(--border-strong)'),
      background: checked ? 'var(--charcoal)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--white)',
    strokeWidth: 3
  }, React.createElement('polyline', {
    points: '20 6 9 17 4 12'
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--charcoal)'
    }
  }, label), React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (error ? 'var(--orange)' : focus ? 'var(--charcoal)' : 'var(--border-subtle)'),
      outline: 'none',
      background: disabled ? 'var(--light-grey)' : 'var(--white)',
      color: 'var(--charcoal)',
      boxShadow: focus ? 'var(--shadow-sm)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--orange-press)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--charcoal)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--charcoal)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--charcoal)'
    }
  }, label), React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      background: disabled ? 'var(--light-grey)' : 'var(--white)',
      color: 'var(--charcoal)',
      outline: 'none'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--orange)' : 'var(--border-strong)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      background: 'none',
      border: 'none',
      padding: '0 0 12px',
      cursor: 'pointer',
      color: active === t.value ? 'var(--charcoal)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (active === t.value ? 'var(--orange)' : 'transparent'),
      transition: 'color var(--duration-base) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
