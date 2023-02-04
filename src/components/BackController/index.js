import React, { useEffect, useState } from 'react'

import settings from '../../config.json'

export const BackController = (props) => {
  const { UIComponent } = props

  const apiUrl = settings.api.url
  const [billState, setbillState] = useState({ loading: false, error: null, result: null })
  const [clientState, setClientState] = useState({ loading: true, error: null, result: null, clients: null })
  const [searchValue, setSearchValue] = useState({ type: null, value: null })
  const [currentTabClients, setCurrentTabClients] = useState(null)

  const clientFiltersDictionary = {
    id: 'cedula_RIF',
    name: 'clienteNombre',
    mail: 'correo',
    phone: 'telefono'
  }

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
          : 'buscarFacturaPorIdCliente'

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
        result: Array.isArray(res) ? res : [res],
        clients: Array.isArray(res) ? res : [res]
      })
    } catch (error) {
      setClientState({
        ...clientState,
        loading: false,
        result: null,
        clients: null,
        error: error?.message ?? error
      })
    }
  }

  const filterClients = () => {
    const param = clientFiltersDictionary?.[currentTabClients] ?? null
    setClientState({
      ...clientState,
      clients: clientState.result?.filter(client => param && searchValue.value ? client[param]?.toLowerCase()?.includes(searchValue.value.toLowerCase()) : client)
    })
  }

  useEffect(() => {
    getBill()
  }, [searchValue])

  useEffect(() => {
    getClients()
  }, [])

  useEffect(() => {
    if (clientState.loading) return
    filterClients()
  }, [currentTabClients, clientState.loading, searchValue.value])

  return (
    UIComponent && (
      <UIComponent
        {...props}
        currentTabClients={currentTabClients}
        billState={billState}
        clientState={clientState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setCurrentTabClients={setCurrentTabClients}
      />
    )
  )
}
