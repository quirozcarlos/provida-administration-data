import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import {
  CardContainer,
  CardInfo,
  ContentWrapper,
  TitleWrapper,
} from "./styles";
import { Button } from "../../Shared/Buttons";

export const BillCard = (props) => {
  const { item } = props;
  const [visible, setVisible] = useState(false);
  const styles = {
    fontWeight: "700",
  };

  const style_link = {
    marginTop: "20px"
  }
  return (
    <CardContainer className="bill-card">
      <div onClick={() => setVisible(true)}>
        <CardInfo>
          <TitleWrapper>{item?.tipo_factura_nombre}</TitleWrapper>
          <TitleWrapper>Bill N. {item?.id_factura}</TitleWrapper>
          <TitleWrapper>
            {item?.cliente_nombre} {item?.cliente_apellido}
          </TitleWrapper>
          <ContentWrapper>{item?.cedula_RIF}</ContentWrapper>
          <ContentWrapper>{item?.fecha_creacion}</ContentWrapper>
          <ContentWrapper>Total: {item?.total_dolares} $</ContentWrapper>
        </CardInfo>
      </div>
      <Dialog
        draggable={false}
        header="Información de la factura"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div>
          <span style={styles}>Nombre:</span>
          <span>{" " + item?.cliente_nombre}</span>
        </div>
        <div>
          <span style={styles}>Apellido:</span>
          <span>{" " + item?.cliente_apellido}</span>
        </div>
        <div>
          <span style={styles}>Cédula:</span>
          <span>{" " + item?.cedula_RIF}</span>
        </div>
        <div>
          <span style={styles}>Cantidad de examenes:</span>
          <span>{" " + item?.cantidad_items}</span>
        </div>
        <div>
          <span style={styles}>Examenes:</span>
          {item?.items.map((it) => {
            return <span>{" -" + it.item.nombre}</span>;
          })}
        </div>
        <div>
          <span style={styles}>Teléfono:</span>
          <span>{" " + item?.telefono}</span>
        </div>
        <div>
          <span style={styles}>Tipo de factura:</span>
          <span>{" " + item?.tipo_factura_nombre}</span>
        </div>
        <div>
          <span style={styles}>Pago total en US$:</span>
          <span>{" " + item?.total_pagar_dolares + " $"}</span>
        </div>

        <div>
          <span style={styles}>Pago total en Bs:</span>
          <span>{" " + item?.total_pagar_bolivares + " Bs"}</span>
        </div>

        <div>
          <span style={styles}>Pago total en pesos colombianos:</span>
          <span>{" " + item?.total_pagar_pesos + " COP"}</span>
        </div>
        <div style={style_link}>
          <a href={item.factura_qr}  target="_blank">
            <Button color="primary">Ver factura</Button>
          </a>
        </div>
      </Dialog>
    </CardContainer>
  );
};
