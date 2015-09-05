<?php

namespace Custom\Service\Homework\Dao\Impl;

use Custom\Service\Homework\Dao\ResultDao;
use Homework\Service\Homework\Dao\Impl\HomeworkDaoImpl;
use Homework\Service\Homework\Dao\Impl\HomeworkResultDaoImpl as BaseHomeworkResultDao;

class ResultDaoImpl extends BaseHomeworkResultDao implements ResultDao
{
    protected $table = 'homework_result';
    protected $homework_table = "homework";
    protected $homework_review_table = "homework_review";

    public function findPairReviewables($homework,$userId){
        $sql = "select r.* from {$this->table} r ".
                        " left join {$this->homework_table} w on r.homeworkId=w.id ".
                        " where r.status='pairReviewing' ".
                        " and r.homeworkId=? ".
                        " and r.userId != ? ".
                        " and r.teacherScore is null ".
                        " and r.id not in (select v.homeworkResultId from {$this->homework_review_table} v where v.homeworkId=? and v.userId=?)";
        return $this->getConnection()->fetchAll($sql, array($homework['id'] , $userId, $homework['id'] ,$userId)) ? : array();
    }

    public function getResultByCourseIdAndUserId($courseId,$userId){
        if (empty($courseId) or empty($userId)) {
            return null;
        }

        $sql = "SELECT * FROM {$this->table} WHERE courseId = ? AND userId = ?";
        return $this->getConnection()->fetchAll($sql, array($courseId, $userId)) ? : null;
    }

    public function findSubmitableResults()
    {
        $sql = "SELECT r.* FROM {$this->table} r LEFT JOIN {$this->homework_table} h ON r.homeworkId=h.id ".
            " WHERE h.pairReview=true and r.status='doing' and h.completeTime<?";
        return $this->getConnection()->fetchAll($sql, array(time()));
    }

    public function findFinishableResults(){
        $sql = "SELECT r.* FROM {$this->table} r LEFT JOIN {$this->homework_table} h ON r.homeworkId=h.id ".
            " WHERE r.status='pairReviewing' and h.reviewEndTime<?";
        return $this->getConnection()->fetchAll($sql, array(time()));
    }
}