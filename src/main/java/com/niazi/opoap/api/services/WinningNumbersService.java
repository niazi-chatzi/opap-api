package com.niazi.opoap.api.services;

import com.niazi.opoap.api.dao.WinningNumbersData;
import com.niazi.opoap.api.entities.WinningNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class WinningNumbersService {
    @Autowired
    private WinningNumbersData winningNumbersData;

    public List<WinningNumber> getAll() {
        return winningNumbersData.findAll();
    }

    public Optional<WinningNumber> getById(Integer id) {
        return winningNumbersData.findById(id);
    }

    public List<WinningNumber> getAllSorted() {
        return winningNumbersData.findAll(Sort.by("timesShown").descending());
    }

    public List<WinningNumber> post(List<WinningNumber> winningNumbers) {
        return winningNumbersData.saveAll(winningNumbers);
    }

    public List<WinningNumber> update(List<WinningNumber> reqWinningNumbers) {
        List<WinningNumber> winningNumbers = winningNumbersData.findAll();
        winningNumbers.forEach(w1 -> reqWinningNumbers.forEach(w2 -> {
            if(Objects.equals(w2.getNumber(), w1.getNumber())) {
                w1.setTimesShown(w1.getTimesShown() + w2.getTimesShown());
            }
        }));

        return winningNumbersData.saveAll(winningNumbers);
    }
}
