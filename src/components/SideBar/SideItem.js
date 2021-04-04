import React from 'react'
import { SideItemContainer } from './style/Container'
import {
  Link
} from 'react-router-dom'

const SideItem = ({ name, path }) => <Link to={path} component={SideItemContainer}>{name}</Link>

export default SideItem;