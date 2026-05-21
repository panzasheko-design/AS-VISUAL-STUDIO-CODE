/**
 * Collaboration Module
 * مميزات التعاون الفوري
 */

export interface CollaborationUser {
  id: string;
  name: string;
  color: string;
  cursorPosition: number;
}

export interface CollaborationSession {
  sessionId: string;
  owner: CollaborationUser;
  participants: CollaborationUser[];
  sharedDocument: string;
  createdAt: Date;
}

export class CollaborationManager {
  private sessions: Map<string, CollaborationSession>;
  private users: Map<string, CollaborationUser>;

  constructor() {
    this.sessions = new Map();
    this.users = new Map();
  }

  /**
   * ✨ Collaboration: Create a new session
   */
  public createSession(owner: CollaborationUser): CollaborationSession {
    const sessionId = `session-${Date.now()}`;
    const session: CollaborationSession = {
      sessionId,
      owner,
      participants: [owner],
      sharedDocument: '',
      createdAt: new Date(),
    };

    this.sessions.set(sessionId, session);
    return session;
  }

  /**
   * ✨ Collaboration: Add user to session
   */
  public addUserToSession(sessionId: string, user: CollaborationUser): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) return false;

    const exists = session.participants.some((p) => p.id === user.id);
    if (!exists) {
      session.participants.push(user);
      this.users.set(user.id, user);
    }
    return true;
  }

  /**
   * ✨ Collaboration: Sync changes in real-time
   */
  public syncChanges(
    sessionId: string,
    userId: string,
    changes: string
  ): { success: boolean; message: string } {
    const session = this.sessions.get(sessionId);
    if (!session) return { success: false, message: 'Session not found' };

    session.sharedDocument += changes;
    return { success: true, message: 'Changes synced' };
  }

  /**
   * ✨ Collaboration: Update cursor position
   */
  public updateCursorPosition(sessionId: string, userId: string, position: number): void {
    const session = this.sessions.get(sessionId);
    if (!session) return;

    const user = session.participants.find((p) => p.id === userId);
    if (user) {
      user.cursorPosition = position;
    }
  }

  /**
   * ✨ Collaboration: Get session state
   */
  public getSessionState(sessionId: string): CollaborationSession | null {
    return this.sessions.get(sessionId) || null;
  }

  /**
   * ✨ Collaboration: Leave session
   */
  public leaveSession(sessionId: string, userId: string): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) return false;

    session.participants = session.participants.filter((p) => p.id !== userId);

    if (session.participants.length === 0) {
      this.sessions.delete(sessionId);
    }
    return true;
  }
}
