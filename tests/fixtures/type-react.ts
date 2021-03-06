import React, {
  ReactText,
  ReactNode,
  ReactType,
  ComponentType,
  ComponentClass,
  StatelessComponent,
  MouseEvent,
  ReactElement,
  SFCElement,
} from 'react';

export interface Props {
  text: React.ReactText;
  textAlias?: ReactText;
  node: React.ReactNode;
  nodeAlias?: ReactNode;
  type: React.ReactType;
  typeAlias?: ReactType;
  comp: React.ComponentType;
  compGeneric?: React.ComponentType<any>;
  compAlias: ComponentType;
  cls: React.ComponentClass;
  clsGeneric?: React.ComponentClass<any>;
  clsAlias: ComponentClass;
  sfc: React.StatelessComponent;
  sfcGeneric?: React.StatelessComponent<any>;
  sfcAlias: StatelessComponent;
  el: React.ReactElement<any>;
  elAlias?: ReactElement<any>;
  sfcEl: React.SFCElement<any>;
  sfcElAlias?: SFCElement<any>;
  jsx: JSX.Element;
  event: React.MouseEvent;
  eventAlias?: MouseEvent;
  ref: React.Ref<any>;
}

export default class TypeReact extends React.Component<Props> {
  render() {
    return null;
  }
}
