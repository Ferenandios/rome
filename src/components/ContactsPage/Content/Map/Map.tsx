import { FC } from "react";

const Map: FC = (): JSX.Element => (
  <>
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.ru/maps/org/remiks/1002877548/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px",
        }}
      >
        Ремикс
      </a>
      <a
        href="https://yandex.ru/maps/1091/nizhnevartovsk/category/building_materials_wholesale/184107755/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px",
        }}
      >
        Стройматериалы оптом в Нижневартовске
      </a>
      <a
        href="https://yandex.ru/maps/1091/nizhnevartovsk/category/hardware_store/184107753/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "28px",
        }}
      >
        Строительный магазин в Нижневартовске
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=76.532977%2C60.934992&mode=search&oid=1002877548&ol=biz&z=16"
        width={560}
        height={400}
        allowFullScreen={true}
        style={{ position: "relative" }}
      />
    </div>
  </>
);

export default Map;
