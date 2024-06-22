import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { SearchBar } from '../layout/SearchBar';

import { Results } from '../layout/Results';
import { Medication } from '../layout/Medication';

export const RoutesApp = () => {

  return (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SearchBar />}></Route>
                <Route path="/medication/:medication" element={<Medication />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

