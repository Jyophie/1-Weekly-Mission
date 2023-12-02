import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { ROUTE } from "@/components/sharing/util";
import { Cta } from "@/components/sharing/ui-cta";
import { Profile } from "@/components/user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;
};

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href={ROUTE.로그인}>
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </Link>
        )}
      </div>
    </nav>
  );
};
