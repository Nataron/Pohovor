# Kód k pohovoru

## Zadání

\*Úkol pro uchazeče - dashboard

1. Popis úkolu
   Každá sekce v aplikaci musí obsahovat jednoduchý přehled toho, co se právě v dané sekci děje a toho, co se stalo od poslední návštěvy. Dále by aplikace měla uživateli pomoci s tím, co je třeba řešit a předkládat samostatné návrhy dle jednotlivých aktivit a podezřelého chování uživatelů.
2. Zadání
   Je třeba vytvořit HTML+CSS+JS stránku, kde bude JS zachycená základní logika a chování obrazovky. K řešení lze použít libovolný přístup nebo framework (VanillaJS, ReactJS, Vue atd.). Pro graf je vhodné použít také samostatnou knihovnu, highcharts.js, chart.js, d3graph apod.

   Důležitější je vytvořit funkční in memory prototyp, vzhled a stylování pomocí CSS je až druhotné (styly budou vycházet z již používaných SCSS komponent). Seznam uživatelů i seznam aktivit (log) si můžete vytvořit jako samostatné pole (array) s objekty. Zajímá nás jen samotná obrazovka, menu a horní lištu není třeba řešit.

   Pro splnění úkolu postačí, když tabulka bude jen vypisovat jednotlivé objekty řádků. Dále chceme widget “Role uživatelů” s grafem, který bude reagovat, pokud interaktivně změním počty rolí uživatelů (simulovat např. tlačítkem, že se hodnoty změnily).

   ![alt text](https://i.ibb.co/R3LCdgV/img.png)

## Installation

- `yarn`
- `yarn start`
- visit http://localhost:3000/
