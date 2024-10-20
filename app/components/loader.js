import styles from "../ui/globalStyles/loader.module.css";

export default function Loader() {
  return (
    <div class={styles.wrapper}>
      <svg>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          easy
        </text>
      </svg>
    </div>
  );
}
