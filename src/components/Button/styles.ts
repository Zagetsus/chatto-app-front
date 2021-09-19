import styled from 'styled-components';

interface Props {
    progress?: boolean;
    color?: string;
    link?: string;
    scale?: string;
    expand?: boolean;
    outline?: boolean;
}

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${props => (props.link ? 'var(--white)' : props.color ?? 'var(--primary)')};

  background-color: ${({color, outline}) =>  outline ? 'transparent' : color ? color : 'var(--primary)'};

  height: 48px;
  font-size: 16px;
  font-weight: 600;
  
  padding: ${props =>
          props.scale === 'scale-0' ?
                  '4px 12px'
                  : props.scale === 'scale-1' ?
                          '8px 12px' :
                          props.scale === 'scale-2' ?
                                  '7px 16px 8px' :
                                  props.scale === 'scale-3' ?
                                          '9px 16px 10px' :
                                          props.scale === 'scale-4' ?
                                                  '13px 24px 14px'
                                                  : props.scale === 'scale-5' ?
                                                          '18px 24px' :
                                                          '13px 24px 14px'};

  color:  ${({outline}) =>  outline ? 'var(--primary)' : 'var(--white)'};
  width: ${props => (props.expand ? '100%' : 'auto')};

  outline: 0;

  border-radius: 4px;

  > i {
    margin-right: 10px;
  }

  &:disabled {
    cursor: ${props => (props.progress ? 'progress' : 'pointer')};
    background-color: ${props =>
            props.outline ? 'transparent' : 'var(--grey-light-1)'};
    border-color: var(--grey-light-1);
    color: ${props =>
            props.outline ? 'var(--grey-light-1)' : 'var(--grey-medium-3)'};

    transition: 0.3s;
  }

  cursor: pointer;
`;
