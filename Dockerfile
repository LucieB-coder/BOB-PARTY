FROM reactnativecommunity/react-native-android:2.1
# set locale to utf8 for fastlane
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
# install bundler
RUN gem install bundler


all: build
VERSION = 2.1


build:
  docker build --tag itporbit/react-native-android:${VERSION} .


push: build
  docker push itporbit/react-native-android:${VERSION}
  git tag react-native-android/${VERSION} HEAD
  git push --tags


run: build
  docker run --rm -ti itporbit/react-native-android:${VERSION}