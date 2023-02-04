import React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import {
  CardContainer,
  CardInfo,
  ContentWrapper,
  TitleWrapper,
} from "./styles";

export const ClientCard = (props) => {
  const { item } = props;
  const [visible, setVisible] = useState(false);
  const styles = {
    fontWeight: "700",
  };
  return (
    <CardContainer className="bill-card shadow-sm p-3 mb-5 bg-body rounded">
      <div onClick={() => setVisible(true)}>
        <CardInfo>
          <TitleWrapper>
            {item?.clienteNombre} {item?.clienteApellido}
          </TitleWrapper>
          <ContentWrapper>{item?.cedula_RIF}</ContentWrapper>
          {item?.correo?.toLowerCase() !== "no" && (
            <ContentWrapper>{item?.correo}</ContentWrapper>
          )}
          <ContentWrapper>Teléfono: {item?.telefono}</ContentWrapper>
        </CardInfo>
      </div>
      <Dialog
        draggable={false}
        header="Información del cliente"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div>
          <span style={styles}>Nombre:</span>
          <span>{" " + item?.clienteNombre}</span>
        </div>
        <div>
          <span style={styles}>Apellido:</span>
          <span>{" " + item?.clienteApellido}</span>
        </div>
        <div>
          <span style={styles}>Cédula:</span>
          <span>{" " + item?.cedula_RIF}</span>
        </div>
        <div>
          <span style={styles}>Correo:</span>
          <span>{" " + item?.correo}</span>
        </div>
        <div>
          <span style={styles}>Tipo de cliente:</span>
          <span>{" " + item?.tipoCliente}</span>
        </div>
        <div>
          <span style={styles}>Teléfono:</span>
          <span>{" " + item?.telefono}</span>
        </div>
        <div>
          <span style={styles}>Contacto:</span>
          <span>
            {item?.contacto != null ? " " + item?.contacto : " No posee"}
          </span>
        </div>
      </Dialog>
    </CardContainer>
  );
};
