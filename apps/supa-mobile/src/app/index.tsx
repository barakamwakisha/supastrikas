/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useGetStrikas } from '@supastrikas/data';

export default function MainPage() {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  const { data: strikas, isLoading } = useGetStrikas();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome SupaMobile 👋
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.hero}>
              <View style={styles.heroTitle}>
                <Svg
                  width={32}
                  height={32}
                  stroke="hsla(162, 47%, 50%, 1)"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </Svg>
                <Text style={[styles.textLg, styles.heroTitleText]}>
                  You're up and running
                </Text>
              </View>
              <TouchableOpacity
                style={styles.whatsNextButton}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text style={[styles.textMd, styles.textCenter]}>
                  Add Strika
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={styles.section}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setWhatsNextYCoord(layout.y);
            }}
          >
            <View style={styles.shadowBox}>
              <Text style={[styles.textLg, styles.marginBottomMd]}>
                Squad
              </Text>
              <Text
                style={[styles.textSm, styles.textLight, styles.marginBottomMd]}
              >
                Supa Strikas team members
              </Text>
              {
                isLoading ? (
                  <Text>Loading...</Text>
                ) : (
                  <View>
                    {strikas?.map((strika) => (
                      <View style={{...styles.listItem, marginVertical: 10 }} key={strika.id}>
                      <Svg width={24}
                        height={24}
                        stroke="none"
                        viewBox="0 0 24 24">
                        <Path fill="#000000" fillRule="evenodd" clipRule="evenodd" d="M2.78199 11.2247L3.17811 10.9628C3.77244 10.57 4.16501 10.3091 4.44321 10.0759C4.70659 9.855 4.80654 9.70729 4.85896 9.56902C4.9114 9.43069 4.93452 9.25362 4.88378 8.91324C4.83021 8.55381 4.70933 8.09777 4.52501 7.40909L4.35773 6.78408C3.48023 8.06855 2.9178 9.58592 2.78199 11.2247ZM5.53164 5.38427C5.54096 5.40862 5.54911 5.43368 5.556 5.45942L5.98476 7.06144C6.15548 7.69921 6.29973 8.23811 6.3674 8.69211C6.40211 8.92503 6.41975 9.15288 6.40887 9.37862L8.90873 10.4321C8.96485 10.3754 9.02531 10.322 9.08995 10.2726L10.9265 8.86802C11.025 8.79263 11.1297 8.72909 11.2385 8.6774V5.96784C11.0301 5.89602 10.8296 5.79841 10.6306 5.68392C10.233 5.45513 9.78446 5.12398 9.25371 4.73217L7.87565 3.71494C7.00795 4.14758 6.21779 4.71286 5.53164 5.38427ZM9.53929 3.07858L10.111 3.50061C10.6843 3.92375 11.0642 4.20276 11.3788 4.38379C11.6767 4.5552 11.8494 4.59806 11.9966 4.59965C12.1438 4.60125 12.3174 4.56214 12.6189 4.39721C12.9373 4.22303 13.3231 3.9523 13.9054 3.54166L14.5266 3.1035C13.7201 2.87326 12.8687 2.75 11.9885 2.75C11.1406 2.75 10.3193 2.86438 9.53929 3.07858ZM16.1849 3.75719C16.156 3.78563 16.1245 3.81211 16.0903 3.83623L14.7359 4.79146C14.1968 5.1717 13.7412 5.49307 13.3387 5.7132C13.1416 5.82099 12.9435 5.9126 12.7385 5.97954V8.6774C12.8472 8.72909 12.9519 8.79263 13.0504 8.86802L14.887 10.2726C14.9527 10.3229 15.0142 10.3773 15.0711 10.4351L17.6319 9.37469C17.6214 9.15027 17.6391 8.92375 17.6736 8.6922C17.7412 8.23821 17.8855 7.6993 18.0562 7.06152L18.485 5.45951C18.4875 5.45005 18.4902 5.44067 18.4931 5.4314C17.8179 4.76108 17.0399 4.19442 16.1849 3.75719ZM19.6651 6.85194L19.516 7.40918C19.3316 8.09787 19.2108 8.5539 19.1572 8.91333C19.1065 9.25372 19.1296 9.43078 19.182 9.56911C19.2344 9.70739 19.3344 9.85509 19.5978 10.0759C19.876 10.3092 20.2685 10.5701 20.8629 10.9629L21.1911 11.1799C21.0514 9.58702 20.5084 8.11008 19.6651 6.85194ZM22.7195 12.402C22.7244 12.2686 22.7269 12.1346 22.7269 12C22.7269 6.06376 17.92 1.25 11.9885 1.25C6.05695 1.25 1.25 6.06376 1.25 12C1.25 17.9362 6.05695 22.75 11.9885 22.75C17.6136 22.75 22.2273 18.4207 22.6889 12.9104C22.7598 12.7465 22.7678 12.5665 22.7195 12.402ZM21.1769 12.9686L20.001 12.1913C19.4507 11.8276 18.9855 11.5201 18.634 11.2253C18.4652 11.0839 18.3106 10.9358 18.1756 10.7731L15.5633 11.8548C15.5513 11.9636 15.529 12.0722 15.4959 12.1794L14.7746 14.5164C14.7495 14.5978 14.7188 14.6764 14.683 14.7517L16.1511 16.4498C16.3756 16.3748 16.6105 16.3301 16.8555 16.302C17.3112 16.25 17.8686 16.25 18.528 16.25H20.1847C20.1886 16.25 20.1924 16.25 20.1962 16.2501C20.7142 15.2492 21.055 14.1415 21.1769 12.9686ZM19.2256 17.75H18.5696C17.8574 17.75 17.3863 17.7511 17.0258 17.7923C16.6846 17.8313 16.5201 17.8994 16.4006 17.9857C16.2809 18.072 16.1643 18.2069 16.0193 18.5189C15.8662 18.8484 15.7161 19.2956 15.4909 19.972L15.2647 20.6515C16.834 20.0554 18.1991 19.0434 19.2256 17.75ZM13.5269 21.1223L14.0808 19.4587C14.2894 18.8323 14.4656 18.303 14.659 17.8868C14.746 17.6995 14.8419 17.5226 14.9542 17.3589L13.5198 15.6998C13.3857 15.7327 13.2462 15.75 13.1036 15.75H10.8733C10.741 15.75 10.6114 15.7351 10.4863 15.7067L9.20983 17.3323C9.33009 17.5034 9.43168 17.6893 9.52346 17.8868C9.71686 18.303 9.89306 18.8323 10.1016 19.4587L10.6667 21.156C11.0984 21.218 11.5397 21.25 11.9885 21.25C12.5126 21.25 13.0266 21.2063 13.5269 21.1223ZM8.94614 20.7367L8.69154 19.972C8.46634 19.2956 8.31624 18.8484 8.16314 18.5189C8.01815 18.2069 7.90148 18.072 7.78185 17.9857C7.66228 17.8994 7.49784 17.8313 7.15658 17.7923C6.79611 17.7511 6.325 17.75 5.61279 17.75H4.75133C5.8285 19.1073 7.2785 20.1546 8.94614 20.7367ZM3.79507 16.2777C3.85952 16.2597 3.92748 16.25 3.99769 16.25H5.65443C6.31385 16.25 6.87124 16.25 7.32692 16.302C7.56165 16.3289 7.78702 16.371 8.00291 16.4405L9.30734 14.7793C9.26578 14.6956 9.23053 14.6078 9.20232 14.5164L8.48098 12.1794C8.44751 12.071 8.42506 11.9611 8.41316 11.851L5.86271 10.7762C5.72828 10.9376 5.57461 11.0847 5.407 11.2252C5.05544 11.52 4.59031 11.8275 4.03997 12.1912L2.80423 13.0081C2.93076 14.1772 3.27484 15.2808 3.79507 16.2777ZM11.9885 10.0084C11.935 10.0084 11.8824 10.0253 11.8377 10.0595L10.0012 11.4641C9.95905 11.4963 9.9294 11.5399 9.91426 11.589C9.89961 11.6364 9.89899 11.6876 9.91426 11.737L10.6356 14.074C10.651 14.1241 10.6807 14.166 10.7197 14.1967C10.7629 14.2308 10.8162 14.25 10.8733 14.25H13.1036C13.1607 14.25 13.214 14.2308 13.2572 14.1967C13.2962 14.166 13.3259 14.1241 13.3413 14.074L14.0626 11.737C14.0779 11.6876 14.0773 11.6364 14.0627 11.589C14.0475 11.5399 14.0179 11.4963 13.9757 11.4641L12.1392 10.0595C12.0945 10.0253 12.0419 10.0084 11.9885 10.0084Z" />
                      </Svg>
                      <View style={styles.listItemTextContainer}>
                        <Text style={styles.textSm}>{strika.name}</Text>
                        <Text>{strika.position}</Text>
                      </View>
                    </View>
                    ))}
                  </View>
                )
              }
            </View>
            <View style={[styles.listItem, styles.love]}>
              <Text style={styles.textSubtle}>Carefully crafted with </Text>
              <Svg
                width={24}
                height={24}
                fill="rgba(252, 165, 165, 1)"
                stroke="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </Svg>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});