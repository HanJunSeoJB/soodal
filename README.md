# 수집의 달인 

## [MongoDB 주소](https://cloud.mongodb.com/)

# 커밋 메시지 컨벤션 가이드

이 문서는 본 프로젝트의 커밋 메시지 작성 규칙을 설명합니다.

## 커밋 메시지 구조

각 커밋 메시지는 다음과 같은 구조를 가지고 있어야 합니다:

- **타이틀**: 커밋의 주요 변경 사항을 간략하게 설명합니다.
- **본문**: 변경 사항에 대한 자세한 설명을 합니다. 필요한 경우, 왜 이 변경이 필요한지에 대한 배경도 포함합니다.
- **푸터**: 이슈 트래커 ID와 같은 추가적인 메타 정보를 포함합니다.

## 커밋 유형

커밋 메시지는 다음과 같은 유형으로 시작해야 합니다:

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경(로직 변경 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 없음)
- `chore`: 빌드 작업, 패키지 매니저 설정 등(프로덕션 코드 변경 없음)

## 예시

feat: 사용자 인증 기능 추가

사용자 로그인 API 구현
로그인 상태를 유지하는 세션 관리 로직 추가<br></br>

# 개발 프로세스 가이드

이 문서는 본 프로젝트의 개발 프로세스와 관련된 지침을 제공합니다.

## 브랜치 전략

프로젝트는 다음과 같은 브랜치 전략을 따릅니다:

### 메인 브랜치

- `main`: 프로덕션 준비가 완료된 코드를 유지합니다. 이 브랜치의 코드는 언제나 배포 가능한 상태여야 합니다.

### 개발 브랜치

- 개발자는 각 기능이나 작업 항목에 대해 별도의 브랜치를 생성합니다.
- 브랜치 명명 규칙은 `기능/작업이름-이슈번호` 형식을 따릅니다. 예: `feat/login-123`

## 작업 흐름

1. **브랜치 생성**: 새 기능이나 버그 수정을 시작하기 전에, `main` 브랜치에서 새로운 브랜치를 생성합니다.
2. **개발**: 생성된 브랜치에서 작업을 진행합니다.
3. **코드 리뷰**: 작업이 완료되면, Pull Request(PR)를 생성하여 코드 리뷰를 요청합니다.
4. **리뷰 반영**: 리뷰어의 피드백을 반영하여 코드를 개선합니다.
5. **병합**: 리뷰어의 승인을 받으면 `main` 브랜치로 병합합니다.

## 주의 사항

- 작업 중인 브랜치는 정기적으로 `main` 브랜치로부터 최신 상태를 가져와야 합니다.
- PR은 가능한 한 작은 단위로 유지하여 리뷰가 용이하도록 합니다.

물론이죠! 협업에서 Git 브랜치를 관리하는 방법에 대해 마크다운 형식으로 작성해 드리겠습니다. 이 내용은 팀과 프로젝트에 따라 조정할 수 있습니다.

---

# 협업을 위한 Git 브랜치 관리 전략

협업에서 효과적인 Git 브랜치 관리는 코드의 안정성과 팀 작업의 효율성을 높이는 데 중요합니다. 다음은 일반적으로 사용되는 브랜치 관리 전략입니다.

## 1. 주요 브랜치

- **`main`/`master`**
  - 최종적으로 사용자에게 배포되는 안정적인 코드가 유지되는 브랜치.
  - 모든 릴리스는 이 브랜치에서 이루어집니다.

- **`develop`**
  - 지속적인 개발을 위한 브랜치.
  - 새로운 기능, 버그 수정, 개선사항 등이 여기서 통합됩니다.

## 2. 지원 브랜치

- **기능 브랜치 (`feature/*`)**
  - 새로운 기능 개발을 위한 브랜치.
  - 이름: `feature/<기능명>` 형식으로 명명.
  - `develop` 브랜치에서 분기하고, 개발 완료 후 `develop`로 다시 병합.

- **릴리스 브랜치 (`release/*`)**
  - 다음 릴리스를 준비하는 브랜치.
  - 이름: `release/<버전>` 형식으로 명명.
  - `develop`에서 분기하고, 릴리스 준비가 완료되면 `main`/`master` 및 `develop`에 병합.

- **핫픽스 브랜치 (`hotfix/*`)**
  - 긴급한 버그 수정을 위한 브랜치.
  - 이름: `hotfix/<버그명>` 형식으로 명명.
  - `main`/`master`에서 분기하고, 수정 후 `main`/`master` 및 `develop`에 병합.

## 3. 브랜치 관리 규칙

1. **명명 규칙 준수**: 브랜치 명명은 일관되고 명확해야 합니다.
2. **단일 목적**: 각 브랜치는 하나의 명확한 목적(기능 개발, 버그 수정 등)을 가져야 합니다.
3. **정기적인 동기화**: `develop` 브랜치는 정기적으로 `main`/`master`와 동기화해야 합니다.
4. **코드 리뷰**: PR(Pull Request)은 코드 리뷰를 거쳐야 합니다.
5. **머지 전 테스트**: 병합 전에 충분한 테스트를 진행해야 합니다.

---

물론입니다. 아래에는 Fork된 레포지토리에서 `feat/abc` 브랜치를 사용하여 `dev` 또는 `develop` 브랜치로 Pull Request를 보내는 과정을 설명하는 마크다운 예시를 작성해 드리겠습니다.

---

# Fork된 레포지토리에서 `feat/abc` 브랜치를 통한 Pull Request 과정

이 문서는 Fork된 레포지토리에서 `feat/abc`라는 기능 브랜치를 사용하여 `dev` 또는 `develop` 브랜치로 Pull Request를 보내는 방법에 대해 설명합니다.

## 1. Fork된 레포지토리에서 작업

```bash
# Fork된 레포지토리를 로컬 시스템으로 클론
git clone <Fork된 레포지토리 URL>

# 클론된 레포지토리로 이동
cd <클론된 레포지토리 이름>

# 새로운 기능 브랜치 생성 및 체크아웃
git checkout -b feat/abc
```

## 2. 기능 개발 및 커밋

```bash
# 변경 사항을 작업하고 커밋
git add .
git commit -m "feat: abc 기능 추가"
```

## 3. Pull Request 생성

1. **작업 완료**: 모든 개발 작업이 완료되고 로컬 테스트를 마친 후, 변경 사항을 Fork된 레포지토리에 푸시합니다.

   ```bash
   git push origin feat/abc
   ```

2. **Pull Request 생성**: GitHub 웹 인터페이스에서 Fork된 레포지토리의 `feat/abc` 브랜치를 선택하고, 원본 레포지토리의 `dev` 또는 `develop` 브랜치를 대상으로 하는 Pull Request를 생성합니다.

## 4. 코드 리뷰 및 병합

- 원본 레포지토리의 관리자나 팀원들이 Pull Request를 리뷰합니다.
- 문제가 없다면, 관리자는 Pull Request를 `dev` 또는 `develop` 브랜치에 병합합니다.

---

이 과정을 통해 새로운 기능 개발이 안정적으로 관리되고, 지속적인 통합이 가능해집니다.

---

