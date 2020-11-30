import { Flex } from '@theme-ui/components';

export interface Props {
  value: string;
}

const Dummy: React.FC<Props> = ({ value = '' }) => {
  return <Flex sx={Styles}>{value}</Flex>;
};

const Styles = {
  // values referencing scales defined in a theme
  color: 'primary',
  bg: 'lightgray',
  fontFamily: 'body',
  // raw CSS value
  boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
};

export default Dummy;
