//sobrescrevendo módulo
declare module "*.svg" {
  import React from "react";
  //usando svg's como componente
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;

}