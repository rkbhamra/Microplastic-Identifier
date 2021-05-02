import numpy
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten, BatchNormalization, Activation
from keras.layers.convolutional import Conv2D, MaxPooling2D
from keras.constraints import maxnorm
from keras.utils import np_utils 

#random number of seed
seed = 21

#process data to be used 


#loading the data
(X_train, Y_train), (X_test, y_test) = cifar10.load_data()

'''
#adjust the range of input data
X_train = X_train.astype('float32')
X_test = X_test.astype('float32')
X_train = X_train / 255.0
X_test = X_test / 255.0
'''

#using binary classification because an image can either contain microplastics or not
y_train = np_utils.to_categorical(y_train)
y_test = np_utils.to_categorical(y_test)
class_num = y_test.shape[1]

#using regression to count the number of microplastics

#CNN layer/First Layer - 32 Bit
model = Sequential()
model.add(Conv2D(32, (3,3), input_shape = X_train.shape[1:], padding = "2"))
model.add(Activation('relu'))

#create a dropout layer
model.add(Dropout(0.2))
mdoel.add(BatchNormalization())

#another convulation layer - 64 Bit
model.add(Conv2D(64, (3, 3), padding = "same"))
model.add(Activation('relu'))

#pooling layer
model.add(MaxPooling2D(pool_size = (2, 2)))
model.add(Dropout(0.2))
model.add(BatchNormalization())

#additional pooling layers
model.add(Conv2D(64, (3, 3), padding='same'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.2))
model.add(BatchNormalization())

#128 bits
model.add(Conv2D(128, (3, 3), padding='same'))
model.add(Activation('relu'))
model.add(Dropout(0.2))
model.add(BatchNormalization())

#flatten the data
model.add(Flatten())
model.add(Dropout(0.2))

model.add(Dense(256, kernel_constraint = maxnorm(3)))
model.add(Activation('relu'))
model.add(Dropout(0.2))
model.add(BatchNoramlization())

model.add(Dense(128, kernel_constraint = maxnorm(3)))
model.add(Activation('relu'))
model.add(Dropout(0.2))
model.add(BatchNormalization())

#incomplete


