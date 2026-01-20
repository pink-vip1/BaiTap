import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Đăng nhập</Text>
        </View>

        {/* Nội dung chính */}
        <View style={styles.content}>
          <Text style={styles.title}>Nhập số điện thoại</Text>
          <Text style={styles.description}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#BDBDBD"
            keyboardType="number-pad"
            autoFocus={true} // Tự động bật bàn phím như trong ảnh
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {/* Nút Tiếp tục */}
          <TouchableOpacity 
            style={[styles.button, phoneNumber ? styles.buttonActive : styles.buttonDisabled]}
            disabled={!phoneNumber}
          >
            <Text style={[styles.buttonText, phoneNumber ? styles.buttonTextActive : styles.buttonTextDisabled]}>
              Tiếp tục
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500', 
    marginBottom: 10,
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 30,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
    marginBottom: 30,
    color: '#000',
  },
  button: {
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#F5F5F5', 
  },
  buttonActive: {
    backgroundColor: '#007AFF', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: '#BDBDBD',
  },
  buttonTextActive: {
    color: '#fff',
  },
});