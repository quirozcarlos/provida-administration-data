import React, { useEffect, useState } from 'react'

import settings from '../../config.json'

export const BackController = (props) => {
  const { UIComponent } = props

  const apiUrl = settings.api.url
  const [billState, setbillState] = useState({ loading: false, error: null, result: null })
  const [clientState, setClientState] = useState({ loading: false, error: null, result: null })
  const [searchValue, setSearchValue] = useState({ type: null, value: null })

  const getBill = async () => {
    if (searchValue.type === null) return
    try {
      setbillState({ ...billState, loading: true })
      const body = searchValue.type === 'billdate'
        ? { desde: searchValue.value?.from, hasta: searchValue.value?.to }
        : searchValue.type === 'billid'
          ? { id_factura: parseInt(searchValue.value, 10) }
          : { id_cliente: parseInt(searchValue.value, 10) }

      const urlType = searchValue.type === 'billdate'
        ? 'buscarFacturaPorFecha'
        : searchValue.type === 'billid'
          ? 'buscarFacturaPorId '
          : 'buscarFacturaPorIdClient'

      const req = await fetch(`${apiUrl}/${urlType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const res = await req.json()

      setbillState({
        ...billState,
        loading: false,
        result: Array.isArray(res) ? res : [res]
      })
    } catch (error) {
      setbillState({
        ...billState,
        loading: false,
        result: null,
        error: error?.message ?? error
      })
    }
  }

  const getClients = async () => {
    if (!props.useClients) return
    try {
      setClientState({ ...clientState, loading: true })
      const req = await fetch(`${apiUrl}/clientes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clave: "hi9pmsgNc4Y3QKA32rPDUh3PtFJPKRx6YcamodSU"
        })
      })
      const res = await req.json()

      setClientState({
        ...clientState,
        loading: false,
        result: Array.isArray(res) ? res : [res]
      })
    } catch (error) {
      setClientState({
        ...clientState,
        loading: false,
        result: null,
        error: error?.message ?? error
      })
    }
  }

  useEffect(() => {
    getBill()
  }, [searchValue])

  useEffect(() => {
    getClients()
    console.log('inside');
  }, [])

  return (
    UIComponent && (
      <UIComponent
        {...props}
        billState={billState}
        clientState={clientState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    )
  )
}
