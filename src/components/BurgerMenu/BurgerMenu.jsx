export const BurgerMenu = () => {
  const items = [
    { value: "О нас", href: "/about" },
    { value: "Как это работает", href: "/about" },
    { value: "Где работаем", href: "/about" },
    { value: "FAQ", href: "/about" },
    { value: "Контакты", href: "/contacts" },
  ];

  return (
    <div className="menu">
      <div className="blur">
        <div className="menu__conteiner">
          <ul>
            {items.map((item) => (
              <li>
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
