import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  faBell,
  faBuilding,
  faCalendar,
  faFile,
  faList,
  faUsers,
  faCheck,
  faArrowRight,
  faMagnifyingGlass,
  faShieldHalved,
  faChartLine,
  faBars,
  faXmark,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const icons: Record<string, IconDefinition> = {
  bell: faBell,
  building: faBuilding,
  calendar: faCalendar,
  file: faFile,
  list: faList,
  users: faUsers,
  check: faCheck,
  arrow: faArrowRight,
  search: faMagnifyingGlass,
  shield: faShieldHalved,
  chart: faChartLine,
  menu: faBars,
  close: faXmark,
  chevron: faChevronRight,
  success: faCircleCheck,
};

export default function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <FontAwesomeIcon
      icon={icons[name] ?? faCircleCheck}
      className={className}
    />
  );
}