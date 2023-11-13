import styles from './user-setting.module.scss';

/* eslint-disable-next-line */
export interface UserSettingProps {}

export function UserSetting(props: UserSettingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UserSetting!</h1>
    </div>
  );
}

export default UserSetting;
