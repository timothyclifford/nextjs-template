import { Flex, Text } from '@theme-ui/components';
import { ThemeUICSSObject } from 'theme-ui';

export interface Props {
  text: string;
}

const Dummy: React.FC<Props> = (props) => {
  return (
    <Flex sx={Styles}>
      <Text>{props.text}</Text>
      {props.children}
    </Flex>
  );
};

const Styles: ThemeUICSSObject = {
  // values referencing scales defined in a theme
  color: 'primary',
  bg: 'lightgray',
  fontFamily: 'body',
  // raw CSS value
  boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
};

export default Dummy;
