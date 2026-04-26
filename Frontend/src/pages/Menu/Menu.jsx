import Navbar from "../../component/navbar/Navbar";

const menuSections = [
  {
    title: "PIZZA",
    items: [
      ["CHEESE PIZZA", "$12.50"],
      ["PEPPERONI PIZZA", "$14.50"],
      ["BBQ CHICKEN PIZZA", "$15.00"],
    ],
  },
  {
    title: "DRINK",
    items: [
      ["SODA (16oz)", "$1.50"],
      ["LEMONADE", "$2.75"],
      ["ICED TEA", "$2.50"],
    ],
  },
  {
    title: "SANDWICH",
    items: [
      ["CHICKEN CUTLET", "$7.75"],
      ["SAUSAGE PARMIGIANA", "$7.50"],
      ["MEATBALL PARMIGIANA", "$7.50"],
    ],
  },
  {
    title: "PASTA",
    items: [
      ["SPAGHETTI W/MEAT BALL", "$9.25"],
      ["SPAGHETTI W/PARMESEN", "$6.75"],
      ["SPAGHETTI W/SHRIMP", "$12.50"],
    ],
  },
];

function Menu() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1A1A1A] pt-[100px] flex justify-center">
        <section className="w-full max-w-[700px] bg-white min-h-[950px] max-[1024px]:w-[70%] max-[1024px]:min-h-0 max-[768px]:w-full">
          <div className="pt-11 text-center text-2xl tracking-[2px]">
            <h1 className="font-['anton'] text-black text-[3rem]">Menu</h1>
          </div>

          <div className="p-14">
            {menuSections.map((section) => (
              <div key={section.title} className="mb-5">
                <h2 className="mb-5 font-['anton'] text-3xl text-black">
                  {section.title}
                </h2>

                <table className="w-full border-collapse">
                  <tbody>
                    {section.items.map(([name, price]) => (
                      <tr key={name}>
                        <td className="py-1 align-top text-[1.2rem] font-bold text-black">
                          {name}
                        </td>

                        <td className="relative w-1/2">
                          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-b-[3px] border-dotted border-[#333]"></span>
                        </td>

                        <td className="py-1 text-right align-top text-[1.2rem] font-bold text-black">
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Menu;