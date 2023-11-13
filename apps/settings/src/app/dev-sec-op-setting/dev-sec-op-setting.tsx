import styles from './dev-sec-op-setting.module.scss';

/* eslint-disable-next-line */
export interface DevSecOpSettingProps {}

export function DevSecOpSetting(props: DevSecOpSettingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DevSecOpSetting!</h1>
    </div>
  );
}

export default DevSecOpSetting;
