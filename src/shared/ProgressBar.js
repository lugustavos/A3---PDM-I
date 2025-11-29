import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ProgressBar({ progress = 0, height = 12, showLabel = false }) {
  const pct = Math.max(0, Math.min(1, Number(progress) || 0));
  const pctRounded = Math.round(pct * 100);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.track, { height, borderRadius: Math.max(4, height / 2) }]}>
        <View style={[styles.fill, { width: `${pctRounded}%`, height, borderRadius: Math.max(4, height / 2) }]} />
      </View>
      {showLabel ? <Text style={styles.label}>{pctRounded}%</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%', alignItems: 'flex-start' },
  track: { width: '100%', backgroundColor: '#EEE', overflow: 'hidden' },
  fill: { backgroundColor: '#4caf50' },
  label: { marginTop: 6, fontSize: 12, color: '#333' },
});
