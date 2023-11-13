import styles from './history-setting.module.scss';

/* eslint-disable-next-line */
export interface HistorySettingProps {}

export function HistorySetting(props: HistorySettingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HistorySetting!</h1>
    </div>
  );
}

export default HistorySetting;
