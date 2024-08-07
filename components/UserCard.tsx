import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type UserProps = {
  user: {
    id: string;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
  };
};

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.nameText}>{user.first_name} {user.last_name}</Text>
      <Text style={styles.subText}>ID: {user.id}</Text>
      <Text style={styles.subText}>UID: {user.uid}</Text>
      <Text style={styles.subText}>Password: {user.password}</Text>
      <Text style={styles.subText}>Username: {user.username}</Text>
      <Text style={styles.subText}>Email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 0.5,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  }
});

export default UserCard;
