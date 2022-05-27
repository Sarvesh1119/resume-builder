import React from 'react'

export const validEmail = RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$')

export const validPassword= RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")