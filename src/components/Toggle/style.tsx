import {StyleSheet} from 'react-native';

export const toggleStyle = StyleSheet.create({
  toggleHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 42,
  },
  backBtn: {
    width: '10%',
  },
  headerWidth: {
    width: '90%',
  },
  headerText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
  toggleContainer: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#7AD6DA',
    borderRadius: 30,
    padding: 2,
  },
  toggleBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
