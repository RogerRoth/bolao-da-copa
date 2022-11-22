import { Button, HStack, Text, useTheme, VStack } from 'native-base';
import { X, Check } from 'phosphor-react-native';
import { getName } from 'country-list';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br'

import { Team } from './Team';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: string;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
};

interface Props {
  data: GameProps;
  onGuessConfirm: () => void;
  setFirstTeamPoints: (value: string) => void;
  setSecondTeamPoints: (value: string) => void;
};

export function Game({ data, setFirstTeamPoints, setSecondTeamPoints, onGuessConfirm }: Props) {
  const { colors, sizes } = useTheme();

  const [firstTeamResult, setFirstTeamResult] = useState('')
  const [secondTeamResult, setSecondTeamResult] = useState('')

  const when = dayjs(data.date).locale(ptBR).format("DD [de] MMMM [de] YYYY [às] HH:00[h]")
  
  function handleTeamPointsExibition() {
    setFirstTeamResult(data.guess !== null ? String(data.guess?.firstTeamPoints) : '')
    setSecondTeamResult(data.guess !== null ? String(data.guess?.secondTeamPoints) : '')
  }
  
  useFocusEffect(useCallback(() => {
    handleTeamPointsExibition()
  },[]))
  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {getName(data.firstTeamCountryCode)} vs. {getName(data.secondTeamCountryCode)}
      </Text>

      <Text color="gray.200" fontSize="xs">
        {when}
      </Text>

      <HStack mt={4} w="full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
          teamPoints={firstTeamResult}
        />

        <X color={colors.gray[300]} size={sizes[6]} />

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
          teamPoints={secondTeamResult}
        />
      </HStack>

      {
        !data.guess &&
        <Button size="xs" w="full" bgColor="green.500" mt={4} onPress={onGuessConfirm}>
          <HStack alignItems="center">
            <Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
              CONFIRMAR PALPITE
            </Text>

            <Check color={colors.white} size={sizes[4]} />
          </HStack>
        </Button>
      }
    </VStack>
  );
}