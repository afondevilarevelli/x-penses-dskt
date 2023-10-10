import Logo from "../../components/common/Logo";

type TProps = {
  opened: boolean;
};

export default function DrawerHeaderContent({ opened }: TProps) {
  return opened ? <Logo style={{ height: 120 }} /> : <></>;
}
