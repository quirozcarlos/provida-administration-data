import React, { useRef, useEffect } from 'react'

import { Input } from '../Shared/Inputs'
import { ContainerSearch, DeleteContent } from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    handleCustomEnter,
    forwardRef
  } = props

  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (e.keyCode === 13) {
      handleCustomEnter && handleCustomEnter(e.target.value)
      return
    }

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
        if (el.current) {
          el.current.value = e.target.value
        }
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
          if (el.current) {
            el.current.value = e.target.value
          }
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  const handleClear = () => {
    onSearch('')
    el.current.value = ''
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search || search === '') {
      el.current.value = ''
    }
  }, [search])

  useEffect(() => {
    if (props.forceFocus) {
      el.current.focus()
    }
  }, [props.forceFocus])

  return (
    <ContainerSearch
      className={'search-bar'}
      hasValue={el.current?.value}
    >
      <Input
        ref={(ref) => {
          el.current = ref
          forwardRef && (forwardRef.current = ref)
        }}
        name='search'
        aria-label='search'
        placeholder={placeholder}
        autoComplete='off'
        maxLength='500'
        defaultValue={search}
        onClick={() => handleCustomEnter && handleCustomEnter()}
      />
      <DeleteContent className='clear'>
        {el.current?.value && <span onClick={handleClear}>Clear</span>}
      </DeleteContent>
    </ContainerSearch>
  )
}
