import styles from './system-setting.module.scss';

/* eslint-disable-next-line */
export interface SystemSettingProps {}

export function SystemSetting(props: SystemSettingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SystemSetting!</h1>
    </div>
  );
}

export default SystemSetting;
