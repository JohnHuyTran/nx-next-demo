import styles from './profile-setting.module.scss';

/* eslint-disable-next-line */
export interface ProfileSettingProps {}

export function ProfileSetting(props: ProfileSettingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProfileSetting!</h1>
    </div>
  );
}

export default ProfileSetting;
